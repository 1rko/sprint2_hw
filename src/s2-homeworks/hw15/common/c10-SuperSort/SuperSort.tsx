import React from 'react'
import down from '../Icons/arrowDown.svg'
import up from '../Icons/arrowUp.svg'
import twoArrows from '../Icons/towoArrowsUpDown.svg'

// добавить в проект иконки и импортировать
const downIcon = down //'[\\/]'
const upIcon = up //'[/\\]'
const noneIcon = twoArrows//'[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    let newSort = ''
    if (sort === down) {
        newSort = up
    } else {
        if (sort === up) {
            newSort = ''
        } else {
            newSort = down      //sort === '' and another
        }
    }
    return newSort // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {<img
                id={id + '-icon-' + sort}
                src={icon}
                alt={'icon'}
            />}
            {/*  сделать иконку
            <img
                id={id + '-icon-' + sort}
                src={icon}
            />

             а это убрать*/}
        </span>
    )
}

export default SuperSort
