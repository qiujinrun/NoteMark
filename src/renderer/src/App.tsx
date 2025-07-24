import { 
  Content,
  RootLayout, 
  Sidebar, 
  DraggableTopBar, 
  ActionButtonRow, 
  NotePreviewList, 
  MarkdownEditor, 
  FloatingNoteTitle 
} from "@/components"
import { useRef } from "react"

const App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)
  //打开笔记时滚动到顶部
  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0,0)
  }
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonRow className="flex justify-between mt-1"/>
          <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
        </Sidebar>
        <Content className="border-1 bg-zinc-900/50 border-l-white/20">
          <FloatingNoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
    
  )
}

export default App
