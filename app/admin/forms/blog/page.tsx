'use client';

import { useState } from 'react';
import { Plus, X, Save, Eye } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ContentBlock {
  id: string;
  type: 'section-title' | 'title' | 'subtitle' | 'text' | 'list' | 'code' | 'imageLink';
  content: string;
  language?: string;
  imageLink?: string;
}

interface ArticleData {
  title: string;
  category: string;
  blocks: ContentBlock[];
}

import { createArticle } from '@/app/actions/articles';

export default function ContentBuilder() {
  const [blocks, setBlocks] = useState<ContentBlock[]>([
    { id: '1', type: 'title', content: '' },
  ]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const blockTypes = [
    { value: 'section-title', label: 'Section Title', description: 'Серый заголовок секции' },
    { value: 'title', label: 'Title', description: 'Основной заголовок' },
    { value: 'subtitle', label: 'Sub Title', description: 'Подзаголовок' },
    { value: 'text', label: 'Simple Text', description: 'Обычный текст' },
    { value: 'list', label: 'List', description: 'Маркированный список' },
    { value: 'code', label: 'Code', description: 'Блок кода с подсветкой' },
    { value: 'imageLink', label: 'Image', description: 'Ссылка на изображение' },
  ];

  const codeLanguages = [
    'bash',
    'javascript',
    'typescript',
    'python',
    'java',
    'sql',
    'powershell',
  ];

  const addBlock = () => {
    setBlocks([...blocks, { id: Date.now().toString(), type: 'text', content: '' }]);
  };

  const removeBlock = (id: string) => {
    if (blocks.length > 1) setBlocks(blocks.filter((b) => b.id !== id));
  };

  const updateBlock = (id: string, field: keyof ContentBlock, value: any) => {
    setBlocks(blocks.map((b) => (b.id === id ? { ...b, [field]: value } : b)));
  };

  const handleSubmit = async () => {
    if (!title.trim() || !category.trim()) {
      alert('Пожалуйста, заполните заголовок и категорию');
      return;
    }

    const emptyBlocks = blocks.filter(
      (b) => !b.content.trim() && b.type !== 'imageLink' && !b.imageLink?.trim()
    );
    if (emptyBlocks.length > 0) {
      alert('Пожалуйста, заполните все блоки или удалите пустые');
      return;
    }

    setIsSubmitting(true);
    try {
      const articleData: ArticleData = { title, category, blocks };
      const result = await createArticle(articleData);
      if (result.success) {
        alert(result.message || 'Статья успешно создана!');
        setTitle('');
        setCategory('');
        setBlocks([{ id: Date.now().toString(), type: 'title', content: '' }]);
      } else {
        alert(result.error || 'Ошибка при создании статьи');
      }
    } catch (error) {
      alert('Ошибка при создании статьи');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderPreviewBlock = (block: ContentBlock) => {
    switch (block.type) {
      case 'section-title':
        return (
          <h1 key={block.id} className="text-xl sm:text-2xl font-bold mb-2 text-gray-300">
            {block.content}
          </h1>
        );
      case 'title':
        return (
          <h2 key={block.id} className="text-xl sm:text-2xl font-bold mb-2 mt-4">
            {block.content}
          </h2>
        );
      case 'subtitle':
        return (
          <h3 key={block.id} className="text-lg font-semibold mb-3">
            {block.content}
          </h3>
        );
      case 'text':
        return (
          <p key={block.id} className="text-base text-gray-700 mb-4">
            {block.content}
          </p>
        );
      case 'list':
        return (
          <ul
            key={block.id}
            className="list-disc text-base text-gray-700 mb-4 ml-6 space-y-1"
          >
            {block.content
              .split('\n')
              .filter((i) => i.trim())
              .map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: item.trim() }} />
              ))}
          </ul>
        );
      case 'code':
        return (
          <div key={block.id} className="mb-4">
            <SyntaxHighlighter language={block.language || 'bash'} style={tomorrow}>
              {block.content}
            </SyntaxHighlighter>
          </div>
        );
      case 'imageLink':
        if (!block.imageLink) return null;
        return (
          <div key={block.id} className="mb-4 flex justify-center">
            <img
              src={block.imageLink}
              alt="Article image"
              className="rounded-lg shadow-md max-h-64"
            />
          </div>
        );
      default:
        return null;
    }
  };

  if (showPreview) {
    return (
      <div className="flex flex-col w-full min-h-screen bg-white">
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Предварительный просмотр</h1>
          <button
            onClick={() => setShowPreview(false)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
          >
            Вернуться к редактированию
          </button>
        </div>
        <div className="w-full lg:w-3/5 max-w-screen-xl mx-auto p-4 sm:p-8 text-gray-900 mt-14">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">{title}</h1>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {category}
            </span>
          </div>
          {blocks.map(renderPreviewBlock)}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm p-4 border-b">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Конструктор контента</h1>
          <div className="flex gap-3">
            <button
              onClick={() => setShowPreview(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg"
            >
              <Eye size={16} /> Предварительный просмотр
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg"
            >
              <Save size={16} /> {isSubmitting ? 'Сохранение...' : 'Сохранить статью'}
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 max-w-4xl mx-auto p-6 w-full space-y-4 mb-64">
        {/* Основная информация */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Основная информация</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Заголовок статьи"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="" disabled>
                Выберите категорию
              </option>
              <option value="blogs">Blogs</option>
              <option value="scripts">Scripts</option>
              <option value="practice">Practice</option>
              <option value="regulations">Regulations</option>
              <option value="resources">Resources</option>
            </select>
          </div>
        </div>
        {/* Блоки */}
        {blocks.map((block, index) => (
          <div key={block.id} className="bg-white rounded-lg p-4 shadow-sm border">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-medium">Блок {index + 1}</h3>
              {blocks.length > 1 && (
                <button onClick={() => removeBlock(block.id)} className="text-red-600">
                  <X size={18} />
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Тип блока</label>
                <div className="flex flex-wrap gap-2">
                  {blockTypes.map((t) => (
                    <button
                      key={t.value}
                      onClick={() => updateBlock(block.id, 'type', t.value)}
                      className={`px-3 py-1 text-sm border rounded-lg transition-colors ${
                        block.type === t.value
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      }`}
                      title={t.description}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
                {block.type === 'code' && (
                  <select
                    value={block.language || 'bash'}
                    onChange={(e) => updateBlock(block.id, 'language', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                  >
                    {codeLanguages.map((lang) => (
                      <option key={lang} value={lang}>
                        {lang}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              <div className="lg:col-span-3">
                {block.type === 'imageLink' ? (
                  <input
                    type="text"
                    placeholder="Ссылка на изображение"
                    value={block.imageLink || ''}
                    onChange={(e) => updateBlock(block.id, 'imageLink', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                ) : (
                  <textarea
                    value={block.content}
                    onChange={(e) => updateBlock(block.id, 'content', e.target.value)}
                    rows={block.type === 'code' ? 6 : 3}
                    placeholder={
                      block.type === 'code' ? 'Введите код...' : 'Введите текст...'
                    }
                    className="w-full p-2 border border-gray-300 rounded-lg font-mono"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center">
          <button
            onClick={addBlock}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
          >
            <Plus size={18} /> Добавить блок
          </button>
        </div>
      </div>
    </div>
  );
}