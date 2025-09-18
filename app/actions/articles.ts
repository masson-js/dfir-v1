"use server";

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

interface ContentBlock {
  id?: string;
  type: 'section-title' | 'title' | 'subtitle' | 'text' | 'list' | 'code' | 'imageLink';
  content: string;
  language?: string;
  imageLink?: string; // <--- новое поле
}

interface ArticleData {
  title: string;
  category: string;
  blocks: ContentBlock[];
}

export async function createArticle(data: ArticleData) {
  try {
    // Валидация данных
    if (!data.title?.trim() || !data.category?.trim() || !data.blocks?.length) {
      return { 
        success: false, 
        error: 'Пожалуйста, заполните все обязательные поля' 
      };
    }

    // Проверка на пустые блоки
    const emptyBlocks = data.blocks.filter(block => !block.content.trim() && block.type !== 'imageLink');
    if (emptyBlocks.length > 0) {
      return { 
        success: false, 
        error: 'Все текстовые блоки должны быть заполнены' 
      };
    }

    // Создание статьи в базе данных
    const article = await prisma.article.create({
      data: {
        title: data.title.trim(),
        category: data.category.trim(),
        blocks: {
          create: data.blocks.map((block, index) => ({
            type: block.type,
            content: block.content.trim(),
            language: block.language || null,
            imageLink: block.imageLink || null, // <--- добавлено
            order: index,
          }))
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      include: {
        blocks: {
          orderBy: { order: 'asc' }
        }
      }
    });

    // Обновляем кеш страниц
    revalidatePath('/articles');
    revalidatePath('/wiki');

    return { 
      success: true, 
      data: article,
      message: 'Статья успешно создана!' 
    };

  } catch (error) {
    console.error('Error creating article:', error);
    return { success: false, error: 'Произошла ошибка при сохранении статьи' };
  }
}

export async function getArticles(category?: string) {
  try {
    const articles = await prisma.article.findMany({
      where: category ? { category } : {},
      include: {
        blocks: { orderBy: { order: 'asc' } },
      },
      orderBy: { createdAt: 'desc' },
    });

    return { success: true, data: articles };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return { success: false, error: 'Ошибка при загрузке статей' };
  }
}

export async function getArticleById(id: string) {
  try {
    const article = await prisma.article.findUnique({
      where: { id },
      include: { blocks: { orderBy: { order: 'asc' } } },
    });

    if (!article) return { success: false, error: 'Статья не найдена' };

    return { success: true, data: article };
  } catch (error) {
    console.error('Error fetching article:', error);
    return { success: false, error: 'Ошибка при загрузке статьи' };
  }
}

export async function updateArticle(id: string, data: ArticleData) {
  try {
    // Удаляем старые блоки
    await prisma.contentBlock.deleteMany({ where: { articleId: id } });

    // Обновляем статью с новыми блоками
    const article = await prisma.article.update({
      where: { id },
      data: {
        title: data.title.trim(),
        category: data.category.trim(),
        blocks: {
          create: data.blocks.map((block, index) => ({
            type: block.type,
            content: block.content.trim(),
            language: block.language || null,
            imageLink: block.imageLink || null, // <--- добавлено
            order: index,
          }))
        },
        updatedAt: new Date(),
      },
      include: { blocks: { orderBy: { order: 'asc' } } },
    });

    revalidatePath('/articles');
    revalidatePath('/wiki');
    revalidatePath(`/articles/${id}`);

    return { success: true, data: article, message: 'Статья успешно обновлена!' };
  } catch (error) {
    console.error('Error updating article:', error);
    return { success: false, error: 'Ошибка при обновлении статьи' };
  }
}

export async function deleteArticle(id: string) {
  try {
    await prisma.article.delete({ where: { id } });
    revalidatePath('/articles');
    revalidatePath('/wiki');
    return { success: true, message: 'Статья успешно удалена!' };
  } catch (error) {
    console.error('Error deleting article:', error);
    return { success: false, error: 'Ошибка при удалении статьи' };
  }
}
