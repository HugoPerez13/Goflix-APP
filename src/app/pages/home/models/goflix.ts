export interface goflix {
 navbar: Navbar;
 hero: Film;


}

export interface Navbar{
    title: string;
    logo: Image;

}


export interface Film{
    title: string;
    imgGallery: Image[];
}


export interface Image{
    src: string;
    alt: string;
}