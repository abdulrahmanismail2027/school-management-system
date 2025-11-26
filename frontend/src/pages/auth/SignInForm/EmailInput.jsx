function EmailInput({ email, setEmail }) {
    return (
        <div>
            <label htmlFor="email" className='text-sm text-slate-900 font-medium mb-2 block'>
                Email Address
            </label>
            <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-slate-50 w-full text-sm text-slate-900 px-4 py-3.5 rounded-lg outline-none border border-slate-200 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100 transition-all"
                placeholder="name@example.com"
                autoComplete="email"
            />
        </div>
    );
}

export default EmailInput;