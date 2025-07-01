import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                borderRadius: 10,
                width: 147,
                height: 4,
                color: '#0c2',

                '&:hover': {
                    color: '#2e8b57'
                },

                '& .MuiSlider-thumb': {
                    border: '1px solid #0c2',
                    backgroundColor: '#fff',
                    width: '18px',
                    height: '18px',
                    '&:before': {
                        position: 'absolute',
                        width: '5px',
                        height: '5px',
                        border: '50%',
                        backgroundColor: '#0c2',
                        boxShadow: 'none'
                    },
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
