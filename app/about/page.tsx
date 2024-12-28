import Image from 'next/image'
import { Book, Code, Coffee } from 'lucide-react'

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 to-black p-8">
      <div className="max-w-3xl mx-auto space-y-12 mb-16">
        <header className="text-center">
          <Image
            src="/favicon.svg?height=200&width=200"
            alt="Soumyaranjan Panda"
            width={200}
            height={200}
            className="mx-auto rounded-full border-4 border-black shadow-2xl"
          />
          <h1 className="mt-6 text-2xl sm:text-4xl font-bold text-gray-100">Soumyaranjan Panda</h1>
          <p className="mt-2 sm:text-xl text-sm text-gray-300">Problem Solver | Tool Builder | Continuous Learner</p>
        </header>

        <section className="bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-white">About Me</h2>
          <p className="text-gray-200 leading-relaxed">
            Hi, I&apos;m Soumyaranjan Panda. I&apos;m passionate about solving complex problems and creating 
            tools that make a difference. My approach to development is rooted in simplicity and 
            effectiveness. I believe that the best solutions are often the most straightforward ones.
          </p>
          <p className="text-gray-200 leading-relaxed">
            With a background in [Your Educational Background or Work Experience], I&apos;ve honed my 
            skills in [Your Key Skills, e.g., &quot;full-stack development, database design, and API 
            integration&quot;]. I&apos;m always excited to take on new challenges and learn emerging technologies.
          </p>
        </section>

        <section className="bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-white">What Drives Me</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Code className="mr-4 text-blue-500 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-white">Problem Solving</h3>
                <p className="text-gray-200">
                  I thrive on breaking down complex problems into manageable pieces and crafting 
                  elegant solutions. The satisfaction of overcoming a challenging bug or optimizing 
                  a slow process is what keeps me coding.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Coffee className="mr-4 text-blue-500 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-white">Continuous Learning</h3>
                <p className="text-gray-200">
                  The tech world is always evolving, and I&apos;m committed to growing with it. Whether 
                  it&apos;s a new framework, language, or design pattern, I&apos;m always eager to expand my 
                  knowledge and improve my craft.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Book className="mr-4 text-blue-500 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-white">Sharing Knowledge</h3>
                <p className="text-gray-200">
                  I believe in the power of community and knowledge sharing. Whether it&apos;s through 
                  mentoring, writing technical articles, or contributing to open-source projects, 
                  I aim to give back to the developer community.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section className="bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-white">Beyond Coding</h2>
          <p className="text-gray-200 leading-relaxed">
            When I&apos;m not immersed in code, you can find me [Your Hobbies or Interests, e.g., 
            &quot;exploring hiking trails, experimenting with new cooking recipes, or diving into a 
            good sci-fi novel&quot;]. I believe in maintaining a healthy work-life balance and finding 
            inspiration in diverse experiences.
          </p>
        </section>
      </div>
    </div>
  )
}

