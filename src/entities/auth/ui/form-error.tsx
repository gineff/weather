export const FormError = ({ error }: { error: string | null }) => {
  if (!error) return null;
  return (
    <div className="text-sm text-red-600 bg-red-100 p-2 rounded-md text-center">
      {error}
    </div>
  );
};;
