export const H2 = ({ children }) => <h2 className={`capitalize text-xl font-semibold leading-loose`}>{children}</h2>;
H2.propTypes;

export const H3 = ({ children }) => <h3 className={`capitalize font-semibold leading-relaxed`}>{children}</h3>;
H3.propTypes;

export const H4 = ({ children }) => <h4 className={`capitalize font-medium mt-2 mb-1`}>&#11166; {children}</h4>;
H4.propTypes;

export const Pre = ({ children }) => <pre className={`overflow-x-scroll text-xs`}>{children}</pre>;
Pre.propTypes;
