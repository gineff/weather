export const SubmitButton = ({
  children,
  loading,
}: {
  children: React.ReactNode;
  loading: boolean;
}) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full py-2 px-4 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition disabled:bg-gray-400"
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};
