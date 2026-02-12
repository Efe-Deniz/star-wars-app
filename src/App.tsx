import { useState } from 'react';
import { StarshipList } from '@/features/starships/components/StarshipList';
import { StarshipDetail } from '@/features/starships/components/StarshipDetail';

function App() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    if (selectedId) {
        return <StarshipDetail id={selectedId} onBack={() => setSelectedId(null)} />;
    }

    return <StarshipList onStarshipClick={setSelectedId} />;
}

export default App;
