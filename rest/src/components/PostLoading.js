import React from "react";

function PostLoading(Component) {
    return function PostLoadingComponet({isLoading, ...props}){
        if(!isLoading) return <Component {...props} />;
        return(
            <p style={ {fontSize:'25px'}} >
                we are waiting for data to load!...
            </p>
        );
    };
  }

  export default PostLoading;