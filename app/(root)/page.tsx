import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {
    const loggedInUser = await getLoggedInUser()

    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type='greeting'
                        title='Welcome'
                        user={loggedInUser?.name || 'Guest'}
                        subtext='Access and manage your account and transactions efficiently.'
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
                Recent transactons
            </div>

            <RightSidebar
                user={loggedInUser}
                transactions={[]}
                banks={[{ currentBalance: 123.5 }, { currentBalance: 39 }]}
            />
        </section>
    );
};

export default Home;
