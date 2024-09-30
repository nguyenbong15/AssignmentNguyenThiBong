export class DropDownUI{
    public static DROPDOWN_LIST = `#dropdown`
    public static OPTION_IN_DROPDOWN_LIST = (option:string) => `//option[normalize-space(text()) = "${option}"]`
}