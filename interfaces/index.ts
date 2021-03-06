// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type IUser = {
  id: number
  name: string
}

export type IPorad = {
  porad: {
  map(arg0: (porad: any, i: any) => JSX.Element): import("react").ReactNode
  description: string
  id: number
  lastchange: number
  lead: string
  status: string
  title: string
  logo: string
}
}

export type IPorady = {
  porady: [
      {
        description: string
        id: number
        lastchange: number
        lead: string
        status: string
        title: string
        logo: string
      }
    ]
  }
