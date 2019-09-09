import * as React from 'react';
import withInstagramFeed from 'origen-react-instagram-feed';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import compose from 'recompose/compose';
import InstagramEmbed from 'react-instagram-embed';

  const styles = () => ({
  wrapper: {},
  image: {
  width: '100%',
  height: '100%',
  },
  });

  export type Props = {
  media?: Array<{
  displayImage: string,
  id?: string,
  postLink?: string,
  accessibilityCaption?: string,
  }>,
  account: string,
  classes: { [$Keys<$Call<typeof styles>>]: string },
  status: 'completed' | 'loading' | 'failed',
  };

  const InstaGrid = ({ classes, media, account, status}: Props) => {

  return (

    <div>   {/* <Grid container spacing={32} className={classes.wrapper}> */}
    {media &&
      status === 'completed' &&
      media.map(({ displayImage, id, postLink, accessibilityCaption }) => (
        <div key={id}>
        {/*<Grid item xs={12} sm={6} md={4} key={id || displayImage}> */}
          <ButtonBase
            href={postLink || `https://www.instagram.com/${account}/`}
          >
          <InstagramEmbed

              url={postLink}
              maxWidth={320}
              hideCaption={false}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
             />
           {/*<img
              src={displayImage}
              alt={accessibilityCaption || 'Instagram picture'}
              className={classes.image}
            /> */}
          </ButtonBase>
        </div>

      ))}
    {status === 'loading' && <p>loading...</p>}
    {status === 'failed' && <p>Check instagram here</p>}
  {/*</Grid> */}
  </div>
  );
  };

  InstaGrid.defaultProps = {
  media: undefined,
  };

  export default compose(
  withInstagramFeed,
  withStyles(styles),
  )(InstaGrid);
