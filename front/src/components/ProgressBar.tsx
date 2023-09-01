import * as Progress from '@radix-ui/react-progress';
import clsx from 'clsx';

interface ProgressBarProp{
    progress: number
}

export function ProgressBar(prop: ProgressBarProp){
    return (
        <Progress.Root className="h-3 rounded-xl bg-habitLightColor w-full mt-4" value={prop.progress}>
          <Progress.Indicator
            className={clsx('h-3 rounded-xl', {
                'bg-completionGreen border-green-500': prop.progress >= 80,
                'bg-completionGreenYellow border-r-green-400': prop.progress >= 60 && prop.progress < 80 ,
                'bg-completionYellow border-yellow-200': prop.progress >= 40 && prop.progress < 60,
                'bg-completionOrange border-orange-300': prop.progress >= 20 && prop.progress < 40,
                'bg-completionRed border-red-900': prop.progress > 0 && prop.progress < 20,
                'bg-habitDefaultBg border-habitDefaultBorder': prop.progress == 0
            })}
            style={{ width: `${prop.progress}%` }}
          />
        </Progress.Root>
      );
}