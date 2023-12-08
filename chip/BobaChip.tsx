interface BobaChipProps extends React.HTMLAttributes<HTMLDivElement> {
    chipColor?: string;
}

function BobaChip(props: BobaChipProps) {
    return (<>
        <div className={`border rounded-full px-4 py-2 text-sm w-fit ${props.className}`}>
            {props.children}
        </div>
    </>);
}

export default BobaChip;