import { FC } from 'react';
export const ContentContainer: FC = props => {

  return (
    <div className="flex-1 drawer h-52">
      <input id="my-drawer" type="checkbox" className="grow drawer-toggle" />
      <div className="items-center  drawer-content">
        {props.children}
      </div>
    </div>
  );
};
