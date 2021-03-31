import React, {useEffect, useState} from "react";

export default function Container(props) {
    const [error, setError] = useState(null);

    useEffect(() => {
        if (props.error) {
            setError(props.error)
        }
    }, [props.error]);

    const onErrorClick = () => {
        setError(null);
    };

    return(
        <div>
            {error && <div onClick={onErrorClick}>{error.message}</div>}
            {props.children}
        </div>
    );
}