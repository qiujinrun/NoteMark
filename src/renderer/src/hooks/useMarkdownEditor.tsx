import { MDXEditorMethods } from '@mdxeditor/editor'
import { saveNoteAtom, selectedNoteAtom } from '@renderer/store'
import { useAtomValue, useSetAtom } from 'jotai'
import { useRef } from 'react'
import { NoteContent } from 'src/shared/models'
import { throttle } from 'lodash'
// import { autoSavingTime } from "src/shared/constants"

export const useMarkdownEditor = () => {
  const selectedNote = useAtomValue(selectedNoteAtom)
  const saveNote = useSetAtom(saveNoteAtom)
  const editorRef = useRef<MDXEditorMethods>(null)

  const handleAutoSaving = throttle(
    async (content: NoteContent) => {
      if (!selectedNote) return
      console.info('Auto saving', selectedNote.title)
      await saveNote(content)
    },
    3000,
    {
      //节流
      leading: false,
      trailing: true
    }
  )
  const handleBlur = async () => {
    if (!selectedNote) return
    handleAutoSaving.cancel()

    const content = editorRef.current?.getMarkdown()
    if (content != null) {
      await saveNote(content)
    }
  }

  return {
    editorRef,
    selectedNote,
    handleAutoSaving,
    handleBlur
  }
}
