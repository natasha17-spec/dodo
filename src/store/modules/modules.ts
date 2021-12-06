export type DoughType = {
    tin: number,
    traditional: number
}

export type Size = {
    name: string,
    size: number,
    dough: DoughType[]
}

export type Pizza = {
    name: '',
    picture:'',
    additives: string[],
    composition: string[],
    size: Size[],
}