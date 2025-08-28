export default function WebHeader({ title, description }: { title: string, description: string }) {
    return (
        <header className="py-8 text-center bg-gradient-to-b from-gray-100 to-gray-200">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <p className="text-lg">{description}</p>
            </div>
        </header>
    )
}