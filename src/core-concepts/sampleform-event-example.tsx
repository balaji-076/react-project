export default function SampleFormEventExample() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const email = formData.get("email");
        console.log("Form submitted:", {name, email});
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
            </div><br />
            <div>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
            </div><br />
            <button type="submit">Submit</button><br /><br />
        </form>
    );

}