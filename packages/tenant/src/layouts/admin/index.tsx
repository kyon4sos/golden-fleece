
import { useContext, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { Avatar } from 'antd';
import { HeartOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuDataItem, ProSettings } from '@ant-design/pro-components';
import { PageContainer, ProLayout, SettingDrawer, HeaderProps } from '@ant-design/pro-components';
import { lazyLoad } from '@/utils';

import { GlobalContext } from '@/utils/context';
import routes from '@/routes'
const IconMap = {
  smile: <SmileOutlined />,
  heart: <HeartOutlined />,
};

function genMenuItem(menus: MenuDataItem[]): MenuDataItem[] {
  return menus.map(({ icon, routes, ...item }) => ({
    ...item,
    icon: icon && IconMap[icon as string],
    routes: routes && genMenuItem(routes),
  }))
}


const DefaultLayout = () => {
  const { routes: flattenRoutes } = useContext(GlobalContext)
  const history = useHistory();
  const pathname = history.location.pathname;
  console.log(pathname);

  // const currentComponent = qs.parseUrl(pathname).url.slice(1);
  // console.log({ pathname }, { currentComponent });
  const currentComponent = flattenRoutes?.find(route => route._path == pathname)
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({ fixSiderbar: true });
  const menuItemClick = (menuItem) => {
    // console.log(key);
    history.push(menuItem.key)
    // console.log(navigator);
    // navigator(key, { replace: true });

  }
  return (
    <div
      id="default-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        logo={<img />}
        title={"Neko Studio"}
        menu={{
          request: async () => genMenuItem(routes || [])
        }}
        menuProps={
          {
            onClick: menuItemClick
          }
        }
        location={{
          pathname,
        }}
        waterMarkProps={{
          content: 'Neko Studio',
        }}
        menuFooterRender={(props: HeaderProps) => {
          return (
            <a
              style={{
                lineHeight: '48rpx',
                display: 'flex',
                height: 48,
                color: 'rgba(255, 255, 255, 0.65)',
                alignItems: 'center',
              }}
              href="https://preview.pro.ant.design/dashboard/analysis"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="pro-logo"
                src="https://procomponents.ant.design/favicon.ico"
                style={{
                  width: 16,
                  height: 16,
                  margin: '0 16px',
                  marginRight: 10,
                }}
              />
              {!props?.collapsed && 'Preview Pro'}
            </a>
          );
        }}
        rightContentRender={() => <div>
          <Avatar shape="square" size="small" icon={<UserOutlined />} />
        </div>}
        {...settings}
      >
        <PageContainer
          tabList={[
            {
              tab: '基本信息',
              key: 'base',
            },
            {
              tab: '详细信息',
              key: 'info',
            },
          ]}
        >
          <div
            style={{
              height: '100vh',
            }}
          >
            {
              currentComponent ?
                <Route component={lazyLoad(currentComponent._component)}></Route>
                : <></>
            }
          </div>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        enableDarkTheme
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting: ProSettings) => {
          setSetting(changeSetting);
        }}
        disableUrlParams={false}
      />
    </div >
  );
}


export default DefaultLayout

