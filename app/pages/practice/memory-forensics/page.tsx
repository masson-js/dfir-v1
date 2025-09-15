import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function MemoryForensics() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto p-8  text-gray-900 mt-14  animate-fade-in opacity-0 animate-[fadeIn_0.6s_ease-in-out_forwards]">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-gray-300">
          Practice
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold mb-2 mt-4">
          Memory Forensics: Uncover Malicious Processes
        </h2>

        <p className="text-lg text-wrap sm:text-lg text-gray-700 mb-8 mr-8 mt-8">
          Memory forensics has become a cornerstone of modern digital forensics
          and incident response (DFIR). As attackers increasingly employ
          fileless malware, living-off-the-land techniques, and sophisticated
          evasion methods, the ability to analyze volatile memory has become
          essential for uncovering malicious activities that leave minimal
          traces on disk.
        </p>

        <h2 className="text-2xl sm:text-4xl font-bold mb-2 mt-4">
          Why Memory Forensics Matters
        </h2>

        <p className="text-lg text-wrap sm:text-lg text-gray-700 mb-8 mr-8 mt-8">
          Traditional disk-based forensics often falls short when dealing with
          advanced persistent threats (APTs) and modern malware families. Memory
          analysis provides unique advantages:
        </p>

        <ul className="list-disc text-lg text-wrap sm:text-lg text-gray-700 mb-8 mr-8 ml-8 mt-8 space-y-2">
          <li>
            <strong>Captures runtime behavior</strong> - Processes, network
            connections, and injected code visible only in memory
          </li>
          <li>
            <strong>Bypasses anti-forensics</strong> - Many evasion techniques
            target disk artifacts, leaving memory traces intact
          </li>
          <li>
            <strong>Reveals encryption keys</strong> - Cryptographic material
            often remains in memory after use
          </li>
          <li>
            <strong>Uncovers process relationships</strong> - Parent-child
            relationships and injection techniques become apparent
          </li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Essential Tools and Frameworks
        </h2>

        <h3 className="text-2xl font-semibold mb-3">Volatility Framework</h3>
        <p className="mb-4">
          The gold standard for memory analysis, Volatility supports multiple
          operating systems and offers extensive plugin architecture:
        </p>
        <div>
          <SyntaxHighlighter language="bash" style={tomorrow}>
            {`BASH
# Basic process enumeration
volatility -f memory.dmp --profile=Win10x64_19041 pslist
# Detect process injection
volatility -f memory.dmp --profile=Win10x64_19041 pslist
             
             `}
          </SyntaxHighlighter>
        </div>

        <div className="bg-gray-900 text-gray-10 p-4 rounded mb-6">
          <div className="text-gray-400 text-xs uppercase mb-2 border-b border-gray-700 pb-1">
            BASH
          </div>
          <div className="font-mono text-sm">
            <div className="text-gray-400"># Basic process enumeration</div>
            <div className="text-green-400">
              volatility -f memory.dmp --profile=Win10x64_19041 pslist
            </div>
            <br />
            <div className="text-gray-400"># Detect process injection</div>
            <div className="text-green-400">
              volatility -f memory.dmp --profile=Win10x64_19041 malfind
            </div>
            <br />
            <div className="text-gray-400"># Network connections analysis</div>
            <div className="text-green-400">
              volatility -f memory.dmp --profile=Win10x64_19041 netscan
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-3">Rekall</h3>
        <p className="mb-4">
          Google's memory analysis framework, particularly strong for Windows
          analysis:
        </p>

        <div className="bg-gray-900 text-white p-4 rounded mb-6">
          <div className="text-gray-400 text-xs uppercase mb-2 border-b border-gray-700 pb-1">
            BASH
          </div>
          <div className="font-mono text-sm">
            <div className="text-gray-400"># Live memory analysis</div>
            <div className="text-green-400">
              rekall --profile Win10x64_19041 pslist
            </div>
            <br />
            <div className="text-gray-400"># Malware detection</div>
            <div className="text-green-400">
              rekall --profile Win10x64_19041 malfind
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4">
          Key Indicators of Malicious Processes
        </h2>

        <h3 className="text-2xl font-semibold mb-3">Process Anomalies</h3>

        <h4 className="text-xl font-semibold mb-2">
          Unusual Process Names and Paths
        </h4>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Processes masquerading as legitimate system processes (svchost.exe
            running from wrong location)
          </li>
          <li>Randomly named executables (abc123.exe, temp001.exe)</li>
          <li>Processes running from temporary directories or user profiles</li>
        </ul>

        <h4 className="text-xl font-semibold mb-2">Process Relationships</h4>
        <ul className="list-disc pl-6 mb-6">
          <li>Orphaned processes (parent process no longer exists)</li>
          <li>
            Unusual parent-child relationships (explorer.exe spawning cmd.exe
            directly)
          </li>
          <li>Process trees that don't align with normal system behavior</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-3">
          Memory Injection Techniques
        </h3>

        <h4 className="text-xl font-semibold mb-2">Code Injection Patterns</h4>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Executable memory regions in processes that shouldn't have them
          </li>
          <li>Memory regions with RWX (Read-Write-Execute) permissions</li>
          <li>Processes with modified import tables or unusual DLL loads</li>
        </ul>

        <h4 className="text-xl font-semibold mb-2">Hollow Process Detection</h4>
        <ul className="list-disc pl-6 mb-6">
          <li>Processes where the main executable has been replaced</li>
          <li>Mismatched process names and loaded modules</li>
          <li>Processes with no backing file on disk</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">Practical Analysis Workflow</h2>

        <h3 className="text-2xl font-semibold mb-3">1. Initial Triage</h3>
        <p className="mb-4">
          Start with basic process enumeration to establish baseline:
        </p>

        <div className="bg-gray-900 text-white p-4 rounded mb-6">
          <div className="text-gray-400 text-xs uppercase mb-2 border-b border-gray-700 pb-1">
            BASH
          </div>
          <div className="font-mono text-sm">
            <div className="text-gray-400">
              # Get overview of running processes
            </div>
            <div className="text-green-400">
              volatility -f memory.dmp pslist | grep -v "System\|smss\|csrss"
            </div>
            <br />
            <div className="text-gray-400"># Check for unsigned processes</div>
            <div className="text-green-400">
              volatility -f memory.dmp psxview
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-3">2. Behavioral Analysis</h3>
        <p className="mb-4">Examine process behaviors and relationships:</p>

        <div className="bg-gray-900 text-white p-4 rounded mb-6">
          <div className="text-gray-400 text-xs uppercase mb-2 border-b border-gray-700 pb-1">
            BASH
          </div>
          <div className="font-mono text-sm">
            <div className="text-gray-400"># Process tree visualization</div>
            <div className="text-green-400">
              volatility -f memory.dmp pstree
            </div>
            <br />
            <div className="text-gray-400"># Command line arguments</div>
            <div className="text-green-400">
              volatility -f memory.dmp cmdline
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-3">
          3. Code Injection Detection
        </h3>
        <p className="mb-4">Look for signs of process injection:</p>

        <div className="bg-gray-900 text-white p-4 rounded mb-6">
          <div className="text-gray-400 text-xs uppercase mb-2 border-b border-gray-700 pb-1">
            BASH
          </div>
          <div className="font-mono text-sm">
            <div className="text-gray-400"># Detect injected code</div>
            <div className="text-green-400">
              volatility -f memory.dmp malfind -p [PID]
            </div>
            <br />
            <div className="text-gray-400"># Check for API hooks</div>
            <div className="text-green-400">
              volatility -f memory.dmp apihooks -p [PID]
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-3">
          4. Network Activity Correlation
        </h3>
        <p className="mb-4">Connect processes to network communications:</p>

        <div className="bg-gray-900 text-white p-4 rounded mb-6">
          <div className="text-gray-400 text-xs uppercase mb-2 border-b border-gray-700 pb-1">
            BASH
          </div>
          <div className="font-mono text-sm">
            <div className="text-gray-400"># Network connections</div>
            <div className="text-green-400">
              volatility -f memory.dmp netscan | grep [PID]
            </div>
            <br />
            <div className="text-gray-400"># DNS queries</div>
            <div className="text-green-400">volatility -f memory.dmp dns</div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4">
          Advanced Detection Techniques
        </h2>

        <h3 className="text-2xl font-semibold mb-3">Entropy Analysis</h3>
        <p className="mb-4">
          High entropy in process memory often indicates packed or encrypted
          malware:
        </p>

        <div>
          <SyntaxHighlighter language="python" style={tomorrow}>
            {`import math
from collections import Counter

def calculate_entropy(data):
    if not data:
        return 0
    entropy = 0
    for count in Counter(data).values():
        p = count / len(data)
        entropy -= p * math.log2(p)
    return entropy`}
          </SyntaxHighlighter>
        </div>

        <h3 className="text-2xl font-semibold mb-3">YARA Rules Integration</h3>
        <p className="mb-4">
          Deploy custom YARA rules to identify specific malware families:
        </p>

        <div className="bg-gray-900 text-white p-4 rounded mb-6">
          <div className="text-gray-400 text-xs uppercase mb-2 border-b border-gray-700 pb-1">
            BASH
          </div>
          <div className="font-mono text-sm">
            <div className="text-gray-400"># Scan memory with YARA rules</div>
            <div className="text-green-400">
              volatility -f memory.dmp yarascan -y malware_rules.yar
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-3">Timeline Analysis</h3>
        <p className="mb-4">
          Correlate process start times with other system events:
        </p>

        <div className="bg-gray-900 text-white p-4 rounded mb-6">
          <div className="text-gray-400 text-xs uppercase mb-2 border-b border-gray-700 pb-1">
            BASH
          </div>
          <div className="font-mono text-sm">
            <div className="text-gray-400"># Process creation timeline</div>
            <div className="text-green-400">
              volatility -f memory.dmp timeliner | grep "Process"
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4">
          Common Evasion Techniques and Countermeasures
        </h2>

        <h3 className="text-2xl font-semibold mb-3">Process Hollowing</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Detection:</strong> Compare process image on disk with
            memory contents
          </li>
          <li>
            <strong>Tool:</strong> Use{" "}
            <code className="bg-gray-200 px-2 py-1 rounded font-mono">
              hollowfind
            </code>{" "}
            plugin or custom scripts
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mb-3">DLL Injection</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Detection:</strong> Analyze process memory maps for
            unexpected DLLs
          </li>
          <li>
            <strong>Tool:</strong>{" "}
            <code className="bg-gray-200 px-2 py-1 rounded font-mono">
              ldrmodules
            </code>{" "}
            and{" "}
            <code className="bg-gray-200 px-2 py-1 rounded font-mono">
              dlllist
            </code>{" "}
            plugins
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mb-3">Rootkit Activity</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Detection:</strong> Compare different process enumeration
            methods
          </li>
          <li>
            <strong>Tool:</strong>{" "}
            <code className="bg-gray-200 px-2 py-1 rounded font-mono">
              psxview
            </code>{" "}
            plugin for cross-validation
          </li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Memory Acquisition Best Practices
        </h2>

        <h3 className="text-2xl font-semibold mb-3">Live System Acquisition</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Use tools like FTK Imager, WinPmem, or LiME</li>
          <li>Consider impact on running system</li>
          <li>Document acquisition time and system state</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-3">VMware Memory Files</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Leverage .vmem files from virtualized environments</li>
          <li>Pause VMs before copying memory files</li>
          <li>Understand snapshot implications</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Case Study: Banking Trojan Detection
        </h2>

        <p className="mb-4">
          A recent investigation revealed a sophisticated banking trojan using
          the following techniques:
        </p>

        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Process injection</strong> into legitimate browser processes
          </li>
          <li>
            <strong>API hooking</strong> to intercept banking credentials
          </li>
          <li>
            <strong>Network encryption</strong> to communicate with C2 servers
          </li>
        </ol>

        <p className="mb-4">The malware was identified through:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Unusual memory permissions in browser processes</li>
          <li>Modified import tables pointing to injected DLLs</li>
          <li>Encrypted network traffic correlation with process activity</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">Conclusion</h2>

        <p className="mb-4">
          Memory forensics provides unparalleled visibility into malicious
          process activity. By combining automated tools with manual analysis
          techniques, DFIR professionals can uncover even the most sophisticated
          threats. Regular practice with different malware families and attack
          techniques is essential for developing proficiency in this critical
          skill.
        </p>

        <p className="mb-6">
          The key to successful memory forensics lies in understanding normal
          system behavior, recognizing anomalies, and systematically
          investigating suspicious processes through multiple analytical
          approaches. As attack techniques evolve, so too must our memory
          analysis capabilities.
        </p>

        <hr className="border-t border-gray-300 my-8" />

        <p className="text-gray-600 italic">
          This article provides foundational knowledge for memory forensics. For
          hands-on practice, consider setting up controlled malware analysis
          environments and practicing with memory samples from public
          repositories like Malware-Traffic-Analysis.net.
        </p>
      </div>
      <Footer />
    </div>
  );
}
