export interface ModalData {
    title: string,
    content: string, 
}

export interface InfoModalData extends ModalData{
    links?:Array< {
        title: string,
        url: string, 
        description: string
    }>
}