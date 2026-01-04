import { useState } from 'react';
import SelectingStep1 from './SelectingStep1';
import SelectingStep2 from './SelectingStep2';
import SelectingStep3 from './SelectingStep3';
import SelectingStep4 from './SelectingStep4';

export default function SectionSelecting() {
    const [tab, setTab] = useState('main')

    return (
        <>
            {tab === 'main' && <SelectingStep1 onChange={(current) => setTab(current)} />}
            {tab === 'step1' && <SelectingStep2 onChange={(current) => setTab(current)} />}
            {tab === 'step2' && <SelectingStep3 onChange={(current) => setTab(current)} />}
            {tab === 'step3' && <SelectingStep4 />}
        </>
    )
}