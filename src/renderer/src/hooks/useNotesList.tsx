import { notesAtom, selectedNoteIndexAtom } from "@renderer/store"
import { useAtom, useAtomValue } from "jotai"

export const useNotesList = ({onSelect}: {onSelect?: () => void}) => {
    const notes = useAtomValue(notesAtom)

    const [ selectedNoteIndex, setselectedNoteIndex ] = useAtom(selectedNoteIndexAtom)
    const handleNoteSelect = (index: number) => async () => {
        setselectedNoteIndex(index)
        if (onSelect) {
            onSelect()
        }
    }

    return {
        notes,
        selectedNoteIndex,
        handleNoteSelect
    }
}