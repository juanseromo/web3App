export interface GalleryI {
    readonly id: number,
    readonly name: string,
    readonly address: string,
    readonly schedule: string,
    readonly wallet: string
}

export interface WalletI {
    readonly walletId: string,
    readonly selectedGalleries: GalleryI[],
    readonly type: 'Gallery' | 'Artist'
}

export interface SelectedI {
    selected?: boolean
}

export type GalleriesSelectedI = GalleryI & SelectedI;
