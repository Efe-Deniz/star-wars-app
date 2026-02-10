import { Button } from './components/ui/Button/Button';

function App() {
    const handleClick = () => {
        alert('Button clicked');
    };
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Button Component Test</h1>

            <div style={{ marginBottom: '1rem' }}>
                <Button onClick={handleClick}>Primary Button</Button>
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <Button variant="secondary" onClick={handleClick}>
                    Secondary Button
                </Button>
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <Button variant="ghost" onClick={handleClick}>
                    Ghost Button
                </Button>
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <Button disabled>Disabled Button</Button>
            </div>
        </div>
    );
}

export default App;
