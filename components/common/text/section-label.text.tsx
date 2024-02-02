interface Props {
    label: string;
    icon?: string;
}

export function SectionLabelText({ icon, label }: Props) {
    return (
        <div>
            <strong className="text-lg uppercase relative after:absolute after:bg-primary-500 after:h-[2px] after:w-8 after:bottom-0 after:start-0">
                {label}
            </strong>
        </div>
    );
}
