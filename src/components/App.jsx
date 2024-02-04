import './App.css';
import { BookList } from './Product';
import { Card } from './Product';

const favouriteBooks = [
    { id: 'id-1', name: 'JS for beginners' },
    { id: 'id-2', name: 'React basics' },
    { id: 'id-3', name: 'React Router overview' },
];

<Card>
    <h1>Card title</h1>
    <p>Text between opening and closing tag</p>
</Card>;

export default function App() {
    return (
        <Card>
            <h1>Card title</h1>
            <p>Text between opening and closing tag</p>
            <p>Text between opening and closing tag</p>
            <p>Text between opening and closing tag</p>
            <p>Text between opening and closing tag</p>
        </Card>
    );
}
