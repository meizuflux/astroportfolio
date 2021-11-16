import { h, Fragment } from 'preact';

export default function AddPrism({ value }) {
    if (value) {
        return (<link rel="stylesheet" href="/prism.css" />)
    }
}