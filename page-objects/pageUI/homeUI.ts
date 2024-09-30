export class HomeUI{
    public static TEXTBOX = (labelName: string) => `//label[normalize-space(text()) = "${labelName}"]/following-sibling::input`
}