export interface ModalData {
    title: string,
    subtitle: string,
    content: string, 
}

export interface InfoModalData extends ModalData{
    links?:Array< {
        title: string,
        url: string, 
        description: string
    }>
    device?: string,
}