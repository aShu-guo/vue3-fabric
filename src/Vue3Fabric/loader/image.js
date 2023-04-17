import { fabric } from 'fabric';
import { shallowRef } from 'vue';
import { dataURItoBlob } from '../utils/index.js';

export default function useImageLoader(context, props) {
  const image = shallowRef();

  const init = () => {
    // 禁用旋转、拉伸control
    image.value
      .setControlsVisibility({
        bl: false,
        br: false,
        mb: false,
        ml: false,
        mr: false,
        mt: false,
        tl: false,
        tr: false,
        mtr: false,
      })
      .set({
        hasBorders: false,
        lockMovementX: true,
        lockMovementY: true,
        evented: props.evented,
        selectable: false,
        hoverCursor: 'default',
      });
  };
  const loadImg = (src) => {
    fabric.Image.fromURL(
      src,
      function (img) {
        img.scale(props.scale);

        image.value = img;
        init();

        if (props.animation) {
          image.value.set({
            clipPath: new fabric.Rect({
              originX: 'center',
              originY: 'center',
            }),
          });
          const width = image.value.getScaledWidth();
          const height = image.value.getScaledHeight();

          const aspectRatio = width / height;
          const animate = function () {
            fabric.util.animate({
              startValue: 50,
              endValue: width,
              duration: 500,
              onChange: function (value) {
                img.clipPath.set('width', value / props.scale);
                img.clipPath.set('height', value / (aspectRatio * props.scale));
                img.set('dirty', true);
                context.value.renderAll();
              },
            });
          };
          animate();
        }

        context.value.viewportCenterObject(image.value);
        context.value.insertAt(image.value, 0);
      },
      { crossOrigin: true },
    );
  };

  const zoomIn = () => {
    const scale = image.value.scaleX;

    const finalScale = scale + props.scaleStep;
    if (finalScale <= 1) {
      image.value.scale(finalScale);
      context.value.renderAll();
      image.value.center();
    }
  };

  const zoomOut = () => {
    const scale = image.value.scaleX;

    const finalScale = scale - props.scaleStep;
    if (finalScale > 0.1) {
      image.value.scale(finalScale);
      context.value.renderAll();
      image.value.center();
    }
  };

  const clockRotate = () => {
    const angle = image.value.angle;
    image.value.rotate(angle + 90);
    context.value.renderAll();
  };

  const antiClockRotate = () => {
    const angle = image.value.angle;
    image.value.rotate(angle - 90);
    context.value.renderAll();
  };

  const exportFile = () => {
    // clear active object
    context.value.discardActiveObject();
    context.value.renderAll();
    // canvas to base64
    const dataURL = this.context.toDataURL({});
    // base64 to URL
    const blob = dataURItoBlob(dataURL);
    // blob to file
    return new File([blob], 'test.png', { type: 'image/png' });
  };

  return { loadImg, zoomOut, zoomIn, clockRotate, antiClockRotate, exportFile };
}
