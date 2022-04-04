import { FC, Children, Fragment } from 'react';

export const Breadcrumb: FC = ({ children }) => {
  const childrenArray = Children.toArray(children);

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <Fragment key={index}>
          <span className="hover:underline">{child}</span>
          <span> {'>'}</span>
        </Fragment>
      );
    }
    return child;
  });

  return (
    <nav className="mt-4">
      <ol className="flex items-center space-x-2 text-grey-ml text-sm">
        {childrenWtihSeperator}
      </ol>
    </nav>
  );
};
