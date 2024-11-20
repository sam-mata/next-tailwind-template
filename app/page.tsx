export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-5xl font-bold pb-6">Project Template</h1>
        <h2 className="text-lg text-zinc-400">
          A quick-start template for web-based projects using Next JS and
          Tailwind CSS. Lovely Jubbly!
        </h2>

        <h2 className="text-lg font-bold pt-12 pb-6">
          Quick-Start Setup Checklist:
        </h2>
        <ul className="list-disc list-inside text-lg text-zinc-300">
          <li>✍️ Change the name of the project in the `package.json` file.</li>
          <li>📄 Update the metadata (title & description) in the `app/layout.tsx` file.</li>
          <li>🎨 Update the `favicon.ico` file.</li>
          <li>📝 Update the `README.md` file with project details.</li>
          <li>⚠️ Adjust repository checks and workflows.</li>
          <li>🔧 Adjust repository project settings.</li>
          <li>🚧 Develop an initial placeholder app.</li>
          <li>🔗 Set project repository as public on GitHub.</li>
          <li>🚀 Deploy the project to Vercel.</li>
        </ul>
      </div>
    </div>
  );
}
