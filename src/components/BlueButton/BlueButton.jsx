import './BlueButton.css';

export default function BlueButton({
    children,
    padding,
    fontSize,
    disabled,
    marginBottom,
}) {
    return (
        <button
            className="blueButton"
            style={{
                padding: padding,
                fontSize: fontSize,
                marginBottom: marginBottom,
            }}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
