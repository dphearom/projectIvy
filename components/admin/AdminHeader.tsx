import { logout } from "@/app/actions/auth";

interface Props {
  userName: string;
}

const AdminHeader = ({ userName }: Props) => {
  return (
    <header className="flex items-center justify-between py-4 px-8 bg-paper border-b border-[color-mix(in_srgb,var(--ink)_8%,transparent)]">
      <div>
        <h2 className="text-[0.95rem] font-medium text-ink-soft">Admin Portal</h2>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-[0.85rem] text-ink-soft">{userName}</span>
        <form action={logout}>
          <button
            type="submit"
            className="text-[0.8rem] text-gold-deep bg-transparent border border-gold-deep py-[0.3rem] px-3 rounded-md cursor-pointer transition-all duration-150 hover:bg-gold-deep hover:text-white"
          >
            Log out
          </button>
        </form>
      </div>
    </header>
  );
};

export default AdminHeader;
