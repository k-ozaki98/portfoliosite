import React, { useState, useEffect } from 'react';

const PartyFollow = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    // タッチデバイスの判定
    const isTouchable = ('ontouchstart' in window) || 
      (navigator.maxTouchPoints > 0) || 
      (navigator.msMaxTouchPoints > 0);
    
    setIsTouchDevice(isTouchable);
  }, []);

  // タッチデバイスの場合は何も表示しない
  if (isTouchDevice) {
    return null;
  }
  const [isInitialized, setIsInitialized] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const [positions, setPositions] = useState([
    { x: 0, y: 0, direction: 'down' },
    { x: 0, y: 0, direction: 'down' },
    { x: 0, y: 0, direction: 'down' },
    { x: 0, y: 0, direction: 'down' }
  ]);

  // パーティーメンバーの情報
  const members = [
    { 
      role: 'Hero',
      sprites: {
        down: '/assets/images/common/party01.png',
        up: '/assets/images/common/party01.png',
        left: '/assets/images/common/party01.png',
        right: '/assets/images/common/party01.png'
      }
    },
    { 
      role: 'Warrior',
      sprites: {
        down: '/assets/images/common/party02.png',
        up: '/assets/images/common/party02.png',
        left: '/assets/images/common/party02.png',
        right: '/assets/images/common/party02.png'
      }
    },
    { 
      role: 'Mage',
      sprites: {
        down: '/assets/images/common/party03.png',
        up: '/assets/images/common/party03.png',
        left: '/assets/images/common/party03.png',
        right: '/assets/images/common/party03.png'
      }
    },
    { 
      role: 'Priest',
      sprites: {
        down: '/assets/images/common/party04.png',
        up: '/assets/images/common/party04.png',
        left: '/assets/images/common/party04.png',
        right: '/assets/images/common/party04.png'
      }
    }
  ];

  const getDirection = (prevPos, newPos) => {
    const dx = newPos.x - prevPos.x;
    const dy = newPos.y - prevPos.y;
    if (Math.abs(dx) > Math.abs(dy)) {
      return dx > 0 ? 'right' : 'left';
    } else {
      return dy > 0 ? 'down' : 'up';
    }
  };

  // カーソルから少し離れた位置を計算する関数
  const getOffsetPosition = (mousePos, prevPos) => {
    const offset = 55; // カーソルからの距離
    const dx = mousePos.x - prevPos.x;
    const dy = mousePos.y - prevPos.y;
    const angle = Math.atan2(dy, dx);
    
    return {
      x: mousePos.x - (offset * Math.cos(angle)),
      y: mousePos.y - (offset * Math.sin(angle))
    };
  };

  useEffect(() => {
    const initializePositions = (e) => {
      if (!isInitialized) {
        const initialPos = { x: e.clientX, y: e.clientY };
        const offsetPos = getOffsetPosition(initialPos, initialPos);
        setMousePos(initialPos);
        setPositions(positions.map(() => ({
          x: offsetPos.x,
          y: offsetPos.y,
          direction: 'down'
        })));
        setIsInitialized(true);
      }
    };

    const handleMouseMove = (e) => {
      if (!isInitialized) {
        initializePositions(e);
        return;
      }

      const newMousePos = { x: e.clientX, y: e.clientY };
      
      setMousePos(prevMousePos => {
        setPositions(prevPositions => {
          const newPositions = [...prevPositions];
          const spacing = 45;

          // 先頭キャラクターの位置をカーソルから少し離す
          const offsetPos = getOffsetPosition(newMousePos, prevPositions[0]);
          newPositions[0] = {
            x: offsetPos.x,
            y: offsetPos.y,
            direction: getDirection(prevMousePos, newMousePos)
          };

          for (let i = 1; i < newPositions.length; i++) {
            const targetPos = newPositions[i - 1];
            const currentPos = prevPositions[i];
            
            const dx = targetPos.x - currentPos.x;
            const dy = targetPos.y - currentPos.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > spacing) {
              const ratio = (distance - spacing) / distance;
              newPositions[i] = {
                x: currentPos.x + dx * ratio,
                y: currentPos.y + dy * ratio,
                direction: getDirection(currentPos, targetPos)
              };
            } else {
              newPositions[i] = { ...currentPos };
            }
          }

          return newPositions;
        });
        return newMousePos;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isInitialized]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] !important hidden md:block">
      {positions.map((pos, index) => (
        <div
          key={index}
          style={{
            position: 'fixed',
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            transform: 'translate(-50%, -50%)',
            zIndex: 9999 - index,
          }}
          className="relative w-4 h-4"
        >
          <img
            src={members[index].sprites[pos.direction]}
            alt={members[index].role}
            style={{
              width: '30px',
              height: '30px',
              imageRendering: 'pixelated'
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default PartyFollow;