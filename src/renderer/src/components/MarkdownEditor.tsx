import {
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin
} from '@mdxeditor/editor'
import { useMarkdownEditor } from '@renderer/hooks/useMarkdownEditor'

export const MarkdownEditor = () => {
  const { editorRef, selectedNote, handleAutoSaving, handleBlur } = useMarkdownEditor()

  if (!selectedNote) return null
  return (
    <MDXEditor
      key={selectedNote.title}
      ref={editorRef}
      onChange={handleAutoSaving}
      onBlur={handleBlur}
      markdown={selectedNote.content}
      plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin()]}
      contentEditableClassName="outline-none min-h-screen max-w-none text-lg px-8 py-5
            caret-yellow-500 prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-heading:my-4
            prose-blockquote:my-4 prose-ul:my-2 prose-li:my-4 prose-code:px-1 prose-code:text-red-500
            prose-code:before:content-[''] prose-code:after:content-['']"
    />
  )
}
