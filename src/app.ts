async function imgLow(img: string, attr: string, maxWidth = 150, maxHeight = 150): Promise<void> {
    const response = await fetch(img);
    const data = await response.blob();
    const imageFile = data;
  
    const reader = new FileReader();
    reader.onload = () => {
      const imgElement = new Image();
      imgElement.onload = () => {
        const aspectRatio = imgElement.width / imgElement.height;
        let targetWidth = maxWidth;
        let targetHeight = maxHeight;
  
        if (aspectRatio > 1) {
          targetHeight = Math.round(targetWidth / aspectRatio);
        } else {
          targetWidth = Math.round(targetHeight * aspectRatio);
        }
  
        const canvas = document.querySelector<HTMLCanvasElement>("#canvas");
        if (canvas) {
          const ctx = canvas.getContext("2d");
          canvas.width = targetWidth;
          canvas.height = targetHeight;
          ctx?.drawImage(imgElement, 0, 0, targetWidth, targetHeight);
          const dataUrl = canvas.toDataURL(imageFile.type);
          document.querySelector<HTMLImageElement>(attr)?.setAttribute("src", dataUrl);
        }
      };
      imgElement.src = reader.result as string;
    };
    reader.readAsDataURL(imageFile);
  }
  
  const imgElement = document.querySelector<HTMLImageElement>('#img');
  imgLow('https://images.pexels.com/photos/912469/pexels-photo-912469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '#img', 200);
  