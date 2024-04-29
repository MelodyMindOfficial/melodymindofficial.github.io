import { useState } from 'react';

export default function SettingsProfile({ updateProfile, auth }) {
    const language = localStorage.getItem('language');

    const [isname, setName] = useState(auth.name || '');
    const [issurname, setSurname] = useState(auth.surname || '');
    const [isdisplayName, setDisplayName] = useState(auth.displayName || '');
    const [islocation, setLocation] = useState(auth.location || '');
    const [isbio, setBio] = useState(auth.bio || '');

    return;
}
