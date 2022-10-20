import {useSelector} from "react-redux";


export const GeneratedText = () => {
    const wordsArray = useSelector(state => state.typer.words);

    return (
        <div className={`generatedTextWrapper`}>
            <div>
                {wordsArray.map((word,index) => {
                    return(
                        <span key={index} className={index === 0 ?`bg-warning mx-1`:`mx-1`}>
                            {word+' '}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}