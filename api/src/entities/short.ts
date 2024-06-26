import { error } from "console"
import z from "zod"

export interface ShortProps {
    id: number
    code: string
    original_url: string
    created_at: Date
}

export class Short {
    private props: ShortProps

    get id () {
        return this.props.id
    }

    get code () {
        const codeLow = this.props.code

        return codeLow.toLocaleLowerCase()
    }

    get original_url () {
        return this.props.original_url
    }


    get created_at () {
        return this.props.created_at
    }

    constructor (props: ShortProps) {
        this.props = props
    }
}