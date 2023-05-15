export interface Vehicle{
    id: string | null;
    make: string | null;
    model: string | null;
    fmodel: string | null;
    year: string | null;
    color: string | null;
    kilometers: number | null;
    gearbox: string | null;
    fuel: string[] | null;
    price: number | null;
    cost: number | null;
    isPromoted: boolean | null;
    img: string[],
}