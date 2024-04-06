import { useEffect, useRef } from 'react';
import './Authorization.css';

export default function Authorization({ children, open }) {
    const dialog = useRef();

    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }
    }, [open]);

    return <dialog ref={dialog}>{children}</dialog>;
}
