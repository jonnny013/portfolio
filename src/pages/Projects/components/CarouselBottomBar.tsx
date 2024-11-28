import { motion } from 'framer-motion'


interface Props {
  index: number
  projectIndex: number
  BottomBarOnClick: (index: number) => void
  time: number,
  animationKey: number
}

const CarouselBottomBar = ({
  index,
  projectIndex,
  BottomBarOnClick,
  time,
  animationKey,
}: Props) => {
  return (
    <div
      key={index}
      style={{
        height: 10,
        width: 10,
        backgroundColor: index !== projectIndex ? 'black' : 'white',
        borderRadius: 5,
      }}
      onClick={() => BottomBarOnClick(index)}
    >
      {index === projectIndex && (
        <motion.div
          style={{
            backgroundColor: 'black',
            width: '0px',
            height: '100%',
            borderRadius: 5,
          }}
          key={animationKey}
          animate={{
            width: `100%`,
            transitionEnd: {
              width: '0%',
            },
          }}
          transition={{
            duration: time,
          }}
        />
      )}
    </div>
  )
}

export default CarouselBottomBar
