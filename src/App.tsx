import { Button } from '@/components/ui/Button';
import { Spinner } from '@/components/ui/Spinner';
import { Card } from '@/components/ui/Card';

function App() {
    const handleClick = () => {
        alert('Clicked!');
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <h1>UI Components Test</h1>

            {/* Button Tests */}
            <section style={{ marginBottom: '3rem' }}>
                <h2>Button Component</h2>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Button onClick={handleClick}>Primary</Button>
                    <Button variant="secondary" onClick={handleClick}>
                        Secondary
                    </Button>
                    <Button variant="ghost" onClick={handleClick}>
                        Ghost
                    </Button>
                    <Button loading>Loading</Button>
                    <Button disabled>Disabled</Button>
                </div>
            </section>

            {/* Spinner Tests */}
            <section style={{ marginBottom: '3rem' }}>
                <h2>Spinner Component</h2>

                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Spinner size="small" />
                    <Spinner />
                    <Spinner size="large" />
                    <Spinner color="accent" />
                </div>
            </section>

            {/* YENİ: Card Tests */}
            <section style={{ marginBottom: '3rem' }}>
                <h2>Card Component</h2>

                {/* Basic Card */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3>Basic Card</h3>
                    <Card>
                        <h3 style={{ marginBottom: '0.5rem' }}>Card Title</h3>
                        <p style={{ color: 'var(--color-text-secondary)' }}>
                            This is a basic card with some content inside.
                        </p>
                    </Card>
                </div>

                {/* Hoverable Card */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3>Hoverable Card (Mouse üzerine gel)</h3>
                    <Card hoverable>
                        <h3 style={{ marginBottom: '0.5rem' }}>Hoverable Card</h3>
                        <p style={{ color: 'var(--color-text-secondary)' }}>
                            Hover to see the lift effect and shadow change.
                        </p>
                    </Card>
                </div>

                {/* Clickable Card */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3>Clickable Card</h3>
                    <Card onClick={handleClick} hoverable>
                        <h3 style={{ marginBottom: '0.5rem' }}>Clickable Card</h3>
                        <p style={{ color: 'var(--color-text-secondary)' }}>
                            Click me! I'm a button element with hover effect.
                        </p>
                    </Card>
                </div>

                {/* Card with Complex Content */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3>Card with Components Inside</h3>
                    <Card>
                        <div style={{ marginBottom: '1rem' }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>Starship Name</h3>
                            <p
                                style={{
                                    color: 'var(--color-text-secondary)',
                                    fontSize: 'var(--text-sm)',
                                    marginBottom: '1rem',
                                }}
                            >
                                Model: X-wing Fighter
                            </p>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                gap: '1rem',
                                alignItems: 'center',
                                marginBottom: '1rem',
                            }}
                        >
                            <span style={{ color: 'var(--color-text-secondary)' }}>
                                Speed: 1050 km/h
                            </span>
                            <span style={{ color: 'var(--color-text-muted)' }}>•</span>
                            <span style={{ color: 'var(--color-text-secondary)' }}>Crew: 1</span>
                        </div>

                        <Button variant="primary">View Details</Button>
                    </Card>
                </div>

                {/* Grid of Cards */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3>Grid of Cards</h3>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '1rem',
                        }}
                    >
                        <Card hoverable onClick={() => alert('Card 1')}>
                            <h4>Card 1</h4>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                                Click to interact
                            </p>
                        </Card>

                        <Card hoverable onClick={() => alert('Card 2')}>
                            <h4>Card 2</h4>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                                Click to interact
                            </p>
                        </Card>

                        <Card hoverable onClick={() => alert('Card 3')}>
                            <h4>Card 3</h4>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                                Click to interact
                            </p>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
