import { logout } from "@/app/actions/auth";

interface Props {
  userName: string;
}

const AdminHeader = ({ userName }: Props) => {
  return (
    <header className="admin-header">
      <div className="admin-header__left">
        <h2 className="admin-header__title">Admin Portal</h2>
      </div>
      <div className="admin-header__right">
        <span className="admin-header__user">{userName}</span>
        <form action={logout}>
          <button type="submit" className="admin-header__logout">
            Log out
          </button>
        </form>
      </div>
    </header>
  );
};

export default AdminHeader;
