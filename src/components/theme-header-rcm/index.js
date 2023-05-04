import React, { memo } from 'react'
import PropType from 'prop-types'
import { HYthemeRCMWrapper } from './style'
const HYThemeRCM = memo(function(props) {
    // const { title, keywords=[] } = props
    const { title, keywords } = props
    // console.log(title, keywords);
    return (
        <HYthemeRCMWrapper className='sprite_02'>
            <div className='left'>
                <h1 className='title'>{title}</h1>
                <div className='keyword'>
                    {
                        keywords.map((item, index) => {
                            return (
                                <div className='items' key={index}>
                                    <a href="todo">{item}</a>
                                    <span className='divider'>|</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='right'>
                <a href="todo">更多</a>
            </div>
        </HYthemeRCMWrapper>
    )
})
HYThemeRCM.PropType = {
    title : PropType.string.isRequired,
    keywords : PropType.array
}
HYThemeRCM.defaultProps ={
    keywords:[]
}
export default HYThemeRCM